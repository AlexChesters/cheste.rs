set -e

# build cv
latexmk -outdir=assets --jobname=alex-chesters-cv -pdf cv.tex

# build website
npm run build:prod
