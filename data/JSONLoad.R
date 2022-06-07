requiredPackages <- c("psych", "ltm", "stringr", "ggplot2", "rjson", "reticulate")
new.packages <- requiredPackages[!(requiredPackages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages)
lapply(requiredPackages, require, character.only = TRUE)

wd <- dirname(rstudioapi::getSourceEditorContext()$path)
source_python(paste(wd, '/', 'processFile.py', sep=""))
ids <- list.dirs(wd,recursive = FALSE) 
df <- data.frame(matrix(ncol = 0, nrow = 6))
count <- 0

infoStages <- c("Patient History", "Physical Exmination", "Testing")

participantIDS <- c()
  
for (id in ids)
{
  participantID <- str_split(id, "/", simplify = TRUE)
  participantID <- participantID[length(participantID)]
  participantIDS <- c(participantIDS, participantID)
  files <- list.files(id) 
  file <- files[length(files)]
  filePath <- paste(wd, "/", participantID, "/", file, sep="")
  processFile(filePath)
  # Give the input file name to the function.
  myData <- fromJSON(file=filePath)
  trials <- myData$processedData$trials
  
  for (x in 1:length(trials))
  {
    row <- x + (count*3)
    trialSelect <- trials[x]
    trialSelect <- trialSelect[[1]]
    df$participantID[row] <- participantID
    df$trialNum[row] <- trialSelect$trial
    df$stage[row] <- trialSelect$subtrial
    df$stageName[row] <- infoStages[trialSelect$subtrial]
    df$trueCondition[row] <- toupper(trialSelect$trueCondition)
    df$requestedTests[row] <- trialSelect$numOfRequestedTests
    df$uniqueTests[row] <- length(unique(trialSelect$requestedTestsText))
    df$numOfDifferentials[row] <- length(trialSelect$diagnoses)
    df$confidence[row] <- trialSelect$confidence
    df$correctDiagnosis[row] <- toupper(trialSelect$trueCondition) %in% trialSelect$diagnoses
  }
  count <- count + 1
}

aggData <- data.frame()



## Per stage and per case:
## Across experience::
## Average Confidence
## Information requests
## Starting + final differentials
## Starting differentials as a function of information requests
## Differentials as a function of confidence
## Repeat tests as a function of confidence
## Difficulty via total accuracy across all ppts
## Mixed effects on confidence
## How many differentials have been 'cut down' from start to finish?
# What proportion of total info has been sought? 
