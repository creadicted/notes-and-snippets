---
title: Delete all local branches except master
tags:
  - git
emoji: 🗑️
---

Checkout to master branch.

The command to delete all branches except master is:

```shell
git branch | grep -v "master" | xargs git branch -D
```

To use the functionality in Windows with powershell:

```shell
git branch | %{ $_.Trim() } | ?{ $_ -ne 'master' } | %{ git branch -D $_ }
```

or

```shell
git branch -D @(git branch | select-string -NotMatch "master" | Foreach {$_.Line.Trim()}
```
