all:

docker: 
	docker run -it -v $(PWD):/usr/frontend -w usr/frontend fanta67/frontend