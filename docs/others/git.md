---
title: git常用命令
---

## git常用命令

### git rebase

  Note: **永远不要去 rebase 本地之外的任何提交**

#### 用法一:通过 rebase 策略执行 git pull

- `git pull` 实际上等于 `git fetch + git merge`,这样会添加一条 merge 的commit记录。 我们可以在第二步直接用 `git rebase` 替换 `git merge` 来合并 fetch
  取得的变更，作用同样是避免额外的 merge 提交以保持线性的提交历史。也可以 用 `git pull --rebase` 命令来代替 `git fetch + git rebase`

#### 用法二: 合并多个没有意义的 commit

- `git rebase -i [start] [end]`,-i 会唤起交互式界面让用户编辑以完成变基操作，其中`[start]与[end]`分别对应了需要操作的commit id区间 **(左开右闭)**， 如果省略了`[end]`
  ，则该区间的终点默认是当前分支HEAD所指向的commit

参考链接: [git rebase的用法](https://juejin.cn/post/6844904089722208270)

### `git reset` vs `git revert` (版本回退)

  Note: **已经push到远程仓库的commit不允许reset**,
如果commit已经被push到远程仓库上了，也就意味着其他开发人员就可能基于这个commit形成了新的commit，这时你去reset，就会造成其他开发人员的提交历史莫名其妙的丢失
`git reset` 会回退当前 `HEAD` 到指定 `commit id`, 比如现在有 `commit1, commit2, commit3` 共三条 commit 记录，现在需要回退到 `commit1`
,回退之后，` commit2, commit3`的提交信息在默认(--mixed情况下)会被 放到缓冲区

`git reset` 选项

```text
--mixed 重置索引，但不重置工作树，更改后的文件标记为未提交（add）的状态。默认操作。
--soft 回退后a分支修改的代码被保留并标记为add的状态（git status 是绿色的状态）
--hard 重置索引和工作树，并且a分支修改的所有文件和中间的提交，没提交的代码都被丢弃了。
--merge 和--hard类似，只不过如果在执行reset命令之前你有改动一些文件并且未提交，merge会保留你的这些修改，hard则不会。【注：如果你的这些修改add过或commit过，merge和hard都将删除你的提交】
--keep 和--hard类似，执行reset之前改动文件如果是a分支修改了的，会提示你修改了相同的文件，不能合并。如果不是a分支修改的文件，会移除缓存区。git status还是可以看到保持了这些修改。

```

`git revert` 回撤销历史提交中的指定 commit id,但是它的 HEAD 不是往回退，而是重新创建一个 commit 记录，让 HEAD 前进一步，相当于创建一个撤销的commit来对冲历史提交的记录

### [git cherry-pick] (https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

## FAQ

### Git origin/master

> 远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别的含义一样。 同时 “master” 是当你运行 git init 时默认的起始分支名字，原因仅仅是它的广泛使用，“origin” 是当你运行 git clone 时默认的远程仓库名字
