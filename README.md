
# 프로젝트 설명


* nodejs + express , filebeat , logstash , elasticsearch , kibana를 활용하여 로그를 시각화하여 보여주는 동시에 검색도 가능하게해주는 방법이다

* nodejs 의  winston에 남긴 로그 파일 xxx.log 을 filebeat를 사용하여  logstash로 ship 한 후 logstash에서 parse를 걸쳐 elastic에서 검색가능하게 한다. 마지막으로 kibana에서는 검색가능하게 된 log를 시각화해 줌으로 써 log파일을 일일이 다운받아 찾아볼 필요가 없어진다.

------------



