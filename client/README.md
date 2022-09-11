## 1. nginx.conf 세팅
```bash
# 다음 두줄 추가
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*.conf;

// 아래처럼 server { } 부분 주석처리
# server {
#    listen       80 default_server;
#    listen       [::]:80 default_server;
#    server_name  _;
#    root         /usr/share/nginx/html;
    # Load configuration files for the default server block.
#    include /etc/nginx/default.d/*.conf;
#    location / {
#    }
#    error_page 404 /404.html;
#        location = /40x.html {
#    }
#    error_page 500 502 503 504 /50x.html;
#        location = /50x.html {
#    }
# }
```

## 2. sites-available, sites-enabled 설정
* sties-available, sites-enabled 폴더 생성
```bash
$ sudo mkdir /etc/nginx/sites-available
$ sudo mkdir /etc/nginx/sites-enabled
```
* sites-available 폴더에 .conf 파일 생성
```bash
$ sudo vi /etc/nginx/sites-available/원하는파일명.conf
```
* .conf 파일에 아래 내용 추가
```bash
server {
  listen 80;
  location / {
    # root /home/ec2-user/(react build 폴더 경로) 
    root /home/ec2-user/#######/#######/build;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
}
```
* .conf 설정 테스트
```bash
$ sudo ln -s /etc/nginx/sites-available/#######.conf /etc/nginx/sites-enabled/#######.conf
$ sudo nginx -t
```
* 다음 두줄이 표시되면 이상이 없다는 의미
```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## 3. 실행
* react 실행
```bash
$ sudo systemctl start nginx
# stop(정지), restart(재시작)
```
* node 실행
```bash
$ pm2 start (node 서버 파일이름)
# stop(정지)
```

## etc
* nginx 상태 확인
```bash
$ sudo systemctl status nginx
```