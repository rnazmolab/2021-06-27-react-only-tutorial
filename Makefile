PORT=5501

.PHONY: server
server:
	echo "=> Open http://localhost:$(PORT) on your browser."
	cd ./src && python3 -m http.server $(PORT)
