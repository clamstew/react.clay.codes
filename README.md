# My blog about react

I thought I'd build it using react.

I'm using react a lot and solving some interesting issues, and I'd like to chronicle some of it in this repo.

---

## Workflow

* write a new markdown file in `public/blog-markdown` as your blog post
* add a new object to `public/blog-config`, incrementing the `id` field, displayed title and description come from here
* run `yarn yolo` (or `yarn build` then `yarn deploy`)
* if you just add config, then you can skip step 3, and just run `yarn deploy`