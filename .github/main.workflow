workflow "Testing" {
  on = "push"
  resolves = ["e2e"]
}

action "Build App" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "build"
}

action "Lint it" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Build App"]
  runs = "lint"
}

action "Test it" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Lint it"]
  runs = "test"
}

action "e2e" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Test it"]
  runs = "e2e"
}
