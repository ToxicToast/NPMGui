workflow "Testing" {
  on = "push"
  resolves = ["e2e"]
}

action "Lint it" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
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
