# !bin/sh
# staticPath 페이징 스크립트
# ex) ./docFilePaging.sh 3(페이지) 5(페이지당 라인 수)

page=$1
per=$2

if [ $page -eq 0 ]; then
  page=1
fi

static_path="$( cd "$( dirname . )" && pwd -P )/staticPath.txt"

all_line="$(expr `cat $static_path | wc -l` + 1)"
total_page="$(expr $all_line / $per)"
tail_num="$(expr $per \* $page)"
remain_line="$(expr $all_line % $per)"

# 페이지당 라인 수로 나눈 나머지가 0보다 크면 페이지 + 1
if [ $remain_line -gt 0 ]; then
  total_page="$(expr $total_page + 1)"
fi

# 구하려는 페이지가 total 을 초과 하면 exit fail
if [ $total_page -lt $page ]; then
  exit 0
fi

head_num=$per

# 구하려는 페이지가 마지막 일 경우
if [ $page -eq $total_page ]; then
  head_num=$remain_line
fi

tail -$tail_num $static_path | head -$head_num