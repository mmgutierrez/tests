# Quality systems for comunity code contribution 

## What systems should we setup to simplify merging and ensuring quality of community contributions?

I would recommend that you set up the following rules, in order to have a controlled and tidy contribution from your community:

 **1- Add a PR template:** Having a markdown template for your Pull Requests not only standarizes all PRs to have the same quality of information, but also makes it easier for contributors to specify what requirements their code needs to meet in order to be considered for review.

 **2- Add unit tests and Linting checks to your pipeline:** Automating the unit test execution and Linting on the pipeline guarantees that contributors don't bypass / skip these steps before merging code.

 **3- Mandatory and well written unit tests:** Make it clear that unit tests are also part of the contribution. Tests have to be added or updated depending on the case. This also has to be added to the PR template and reviewers should always make sure tests are not just passing but actually validating units.

 **4- Have a clear branching strategy and make sure it's well documented on the README:** Using a Gitflow or Trunk based model that is clear for contributors helps reduce the amount of conflicts on PRs.

 **5- Encourage reverse compatible code:** Whenever a new functionality is introduced, the author or team should be able to revert the changes in case there are bugs found, without impacting existing functionality. 