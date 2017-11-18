# Store Me: A fIle storage Api
### What I want it to do (through an Api Requests) | AKA Scope
* Allow me to save a file
* Allow me to download a file
* Allow me to delete a file
* Allow me to favourite a file
* Allow me to pin a file
* Allow me to see all my files
* Allow me to filter all my files
	* ASC
	* DESC
	* Created At
	* Updated At
* Allow me to search my files
* Allow me to set permissions on a file by:
	* User
	* Group / Team / Department
	* Organization
	* Role / Job
	* X that is part of a group or team
	* Custom Rule 
* Allow me to share a file by link
	* Allow me to set opens on shared link
	* Should it expire

---
### What I want to use to build it
* Database
	* MySQL v5.7
	* Start MySQL `brew services start mysql`
	* Stop MySQL `brew services stop mysql`
	* Root Password `password123!` - don’t judge, this will never see the light of day :P
	* Default Port `3306`

* Application Server & Framework
	* Node v8.9.1
	* Adonis JS v4.0

* Web Server
	* NgninX

* Dev / Prod Env
	* Docker composition
	* AWS EC2
	* AWS domain names and dns

---
### How I am going to track my progress
* Zenhub
	* Github issues
	* 2 Week Sprints with small commitments

---
### Gitflow
* master
	* feature
	* bug
	* enhancement
	* change-request
