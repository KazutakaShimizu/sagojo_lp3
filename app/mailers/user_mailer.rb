class UserMailer < ApplicationMailer
  default from: 'sunglial@gmail.com'
 
  def welcome_email(user)
    @user = user
    mail(to: "sagojosagojo@gmail.com", subject: 'Welcome to My Awesome Site')
  end
end
