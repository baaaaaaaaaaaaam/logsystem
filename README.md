
# 프로젝트 설명


* nodejs + express , filebeat , logstash , elasticsearch , kibana를 활용하여 로그를 시각화하여 보여주는 동시에 검색도 가능하게해주는 방법이다

* docker-compose 설정에 따라 nodejs 의 로그는  docker-volume에 남는다. 

* 남긴 로그 파일 xxx.log 는 filebeat와 공유하며 , logstash로 넘긴다

* logstash에서 parse를 걸쳐 elastic에서 검색가능하게 한다. 

* 마지막으로 kibana에서는 검색가능하게 된 log를 시각화해 줌으로 써 log파일을 일일이 다운받아 찾아볼 필요가 없어진다.


------------

## 참고자료


* 따라한 자료:<https://blog.eunsukim.me/posts/build-logging-system-with-docker-elk-filebeat-nodejs>


* 내가 작성한 글: <https://programmerk.tistory.com/58>

* 실행 방법 글 :  <https://programmerk.tistory.com/59>

* docker-compose build 에서 각 docker image로 만들어서 사용하는 방법 <https://programmerk.tistory.com/60>