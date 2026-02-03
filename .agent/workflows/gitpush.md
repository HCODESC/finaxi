---
description: Commit and push all changes to GitHub
---

This workflow commits all staged and unstaged changes to the repository and pushes them to GitHub.

## Steps

1. Check the current git status to see what files have changed

```bash
git status
```

2. Stage all changes (modified, deleted, and new files)
   // turbo

```bash
git add -A
```

3. Create a commit with a meaningful message describing the changes

```bash
git commit -m "Your commit message here"
```

4. Push the changes to the remote repository (GitHub)

```bash
git push
```

## Notes

- The commit message should be descriptive and summarize the changes made
- If there are no changes to commit, the workflow will exit gracefully
- Make sure you have the necessary permissions to push to the remote repository
- If pushing to a protected branch, you may need to create a pull request instead
