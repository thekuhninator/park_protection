

# CS373 IDB - Park Protection

- Ameya Joshi (Project Leader)
	- EID: aj28283
	- Gitlab ID: MCGenius25
	- Phase 2
		- Estimated Completion Time: 20 hours
		- Actual Completion Time: 30 hours
	- Phase 1
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 20 hours

- Dylan Kan
	- EID: dk9362
	- Gitlab ID: Fanta67
	- Phase 2
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 15 hours
	- Phase 1
		- Estimated Completion Time: 13 hours
		- Actual Completion Time: 10 hours

- Roman Kuhn
	- EID: rck733
	- Gitlab ID: thekuhninator
	- Phase 2
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 17 hours
	- Phase 1
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 12 hours

- Jordan Bogaards
	- EID: jpb3484
	- Gitlab ID: bogaards.jordan
	- Phase 2
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 20 hours
	- Phase 1
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 13 hours

- Skylore Evans
	- EID: sme2244
	- Gitlab ID: poisonthorns
	- Phase 2
		- Estimated Completion Time: 15 hours
		- Actual Completion Time: 20 hours
	- Phase 1
		- Estimated Completion Time: 12 hours
		- Actual Completion Time: 13 hours

- Pedro Silva
	- EID: phs524
	- Gitlab ID: Pedro_Silva0111
	- Phase 2
		- Estimated Completion Time: 10 hours
		- Actual Completion Time: 12 hours
	- Phase 1
		- Estimated Completion Time: 10 hours
		- Actual Completion Time: 5 hours


Website: https://parkprotection.me

Git SHA: fd41472064b5c3b5db4530d3525de05e7f73c809

GitLab Pipelines: https://gitlab.com/thekuhninator/parks_protection/pipelines

Comments:	1) You might notice some images aren't there for plants and animals. This isn't because we didn't
			 scrape an image for them. There are 2 reasons an image won't display. The first is because we
			 used the Bing Image Search API to scrape them. Some of the results Bing returns even if they are
			 the top ones might be relocated on the remote website or removed, giving an error 404 when we try
			 to fetch it, which we didn't realize until too late. The second is because we didn't know fetching
			 from an image with source http removed our own https status, so we physically blocked them to keep
			 our content secure. We will try to fix the images in phase 3 if time permits, but we
			 just wanted to let you know the images are there, they're just bad.

			2) We have tests written that work locally, but we had issues with Docker resulting in us not being
			able to include the Mocha and Python unit tests in the Pipeline, and only Postman being able to run.
			All the tests are written and pass, we were just unavailable to run them in Pipeline because of the
			issues we had with Docker. We have the Selenium, Mocha, and Postman tests in the tests directory and
			the Python unit tests in scraping/tests.py

			Sorry for the inconvenience, we were completely caught off guard by these problems towards the end of
			the project.

