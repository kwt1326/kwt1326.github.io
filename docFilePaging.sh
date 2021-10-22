# !bin/sh

page=$1
per=$2

static_path="$( cd "$( dirname . )" && pwd -P )/staticPath.txt"

all_line="$(cat $static_path | wc -l)"

tail_num="$(expr $per \* $page)"
head_num=$per
remain="$(expr $all_line - $tail_num)"

if [ $remain -lt $per ]
then
  head_num=$remain
fi

echo $tail_num
echo $head_num

if [ $remain -gt 0 ]
then
  tail -$tail_num $static_path | head -$head_num
else
  echo "error"
fi