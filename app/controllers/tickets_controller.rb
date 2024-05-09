class TicketsController < ApplicationController
  before_action :set_project
  before_action :set_ticket, only: [:show, :edit, :update, :destroy]

  def index
    @tickets = @project.tickets
  end

  def show
  end

  def new
    @ticket = @project.tickets.new
  end

  def create
    @ticket = @project.tickets.new(ticket_params)
    if @ticket.save
      redirect_to project_tickets_path(@project), notice: 'Ticket was successfully created.'
    else
      render :new
    end
  end

  private

  def set_project
    @project = current_user.projects.find(params[:project_id])
  end

  def set_ticket
    @ticket = @project.tickets.find(params[:id])
  end

  def ticket_params
    params.require(:ticket).permit(:title, :description, :status, :user_id)
  end
end
