# Feature Work Flow

### The first thing you need to do is clone the remote branch 'sprint-n' to your local repository. In this case the 'gloriabier' folder. You can choose the name and location you prefer. The 'git clone' command creates this new folder. Don't forget to change to this working directory:

```plaintext
git clone -b sprint-1 --single-branch https://github.com/manuelgarciacr/gloriabier.git gloriabier
cd gloriabier
```

![wiki-gloriabier-001](https://user-images.githubusercontent.com/29376434/155516336-76b31f50-b878-4502-8b1b-aa2dc12ce321.png)

### Then you need to create a new branch for the feature, in this case I call it 'bootstrap'. Make sure you are located at the 'sprint-n' branch. Before creating a new branch, it is highly recommended to pull all changes with 'git pull':

```plaintext
git pull
git checkout -b bootstrap
```

![wiki-gloriabier-002](https://user-images.githubusercontent.com/29376434/155508597-03651320-96a6-425a-900b-c9e55d3e394f.png)

### You can do all the local commits you need on the local branch:

```plaintext
git add .
git commit -m "Bootstrap Template Custom CSS"
```

![wiki-gloriabier-003](https://user-images.githubusercontent.com/29376434/155515773-dc561805-eb30-45b9-992e-a1088d055492.png)

### It is recommended to push the job to the remote repository frequently. The first time you push your code, the feature branch does not exist in the remote repository. Git displays a message telling you how to set this upstream:

```plaintext
git push
git push --set-upstream origin bootstrap
```

![image](https://user-images.githubusercontent.com/29376434/155520630-76e699c2-6f1a-48d9-b5d8-0d0c5390ea4c.png)

### When the work is done, you can merge the feature branch (bootstrap) with the develop branch (sprint-n). Make sure all changes are commited and pushed. You must be located in the development branch. After the merge you must push the branch to the server:

```plaintext
git status
git checkout sprint-1
git merge bootstrap
git push
```

![wiki-gloriabier-005](https://user-images.githubusercontent.com/29376434/155524716-bb44772e-30db-459d-9d46-60fa3026c003.png)


