#! LINUX|MAC USERS ONLY. I haven't tested it on Mac, so use with caution

#* To use these aliases, you need to manually load this file with "source ./aliases.sh"
#* or run aliasLoader.sh to add it to your current shell configurations,
#* so the aliases can Automatically loaded when opening the shell.

#* How to run aliasLoader.sh? E.g. bash ./aliasLoader.sh

#? Docker aliases
alias docb="docker build . -t stalwart95/teletalk-client-web"
alias docr="docker run -it -u 0 -p 3000:3000 stalwart95/teletalk-client-web"

#? Railway aliases
alias rwl="railway logs"
alias rwu="railway up"

#? Liara aliases
alias lrdd="liara deploy --platform=docker"
alias lrdn="liara deploy --platform=node"
alias lrl="liara logs"

#? npm aliases
alias nrb="npm run build"
alias nrcf="npm run check:format"
alias nrcl="npm run check:lint"
alias nrcs="npm run check:style"
alias nrct="npm run check:types"
alias nrsd="npm run start:dev"
alias nrsd1="npm run start:dev:1"
alias nrsd2="npm run start:dev:2"
alias nrsp="npm run start:production"
alias nrsp1="npm run start:production:1"
alias nrsp2="npm run start:production:2"
alias sb="serve build"

#? yarn aliases
alias ya="yarn add"
alias yd="yarn dev"
alias ys="yarn start"
alias yy="yarn"
