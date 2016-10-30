require 'sinatra'

set :root, 'lib/app'

get '/' do
  render :html, :index
end

get '/team' do
  render :html, :test
end