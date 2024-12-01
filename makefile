# Variables
RAILS_ENV ?= development
PORT ?= 3000

.PHONY: help setup start stop console routes test migrate seed clean logs

help: ## Show this help
	@echo "Available commands:"
	@grep -h "##" $(MAKEFILE_LIST) | grep -v grep | sed -e 's/\(.*\):.*##\(.*\)/\1\t\2/'| sort | column -t -s $$'\t'

setup: ## Initial setup of the project
	bundle install
	yarn install
	make migrate
	make seed

start: ## Start Rails server
	bin/dev

stop: ## Stop Rails server
	@if [ -f tmp/pids/server.pid ]; then \
		kill -9 `cat tmp/pids/server.pid`; \
		rm tmp/pids/server.pid; \
	fi

console:
	rails c

migrate:
	bin/rails db:migrate

seed:
	rails db:seed

reset-db:
	rails db:drop db:create db:migrate db:seed

rollback:
	rails db:rollback
