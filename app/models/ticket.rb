class Ticket < ApplicationRecord
  belongs_to :project
  belongs_to :user
  enum status: { backlog: 'backlog', in_progress: 'in_progress', in_review: 'in_review', done: 'done' }
end
