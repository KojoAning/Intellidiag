from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import login_view, register_view, user_register, user_login, success_view, user_profile

urlpatterns = [
    path('login_view/', login_view, name='login_view'),
    path("logout/", LogoutView.as_view(), name="logout"),
    path('register_view/', register_view, name='signup_view'),
    path('user_login/', user_login, name='user_login'),
    path('user_register/', user_register, name='user_signup'),
    path('success_view/', success_view, name='success_view'),
    path('user_profile/', user_profile, name='user_profile'),
    
]
