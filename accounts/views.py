# views.py

from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from .forms import LoginForm, RegistrationForm



def success_view(request):
    return render(request, "success.html", {'message': "success"})


def user_profile(request):
    return render(request, "registration/profile.html", {'message': "user_profile"})


def login_view(request):
    form = LoginForm()
    return render(request, "registration/login.html", {"login_form": form})


def register_view(request):
    form = RegistrationForm()
    return render(request, "registration/signup.html", {"registration_form": form})
    
def user_register(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            # Return JSON response upon successful registration
            return JsonResponse({'status': 'success', 'message': 'Registration successful', 'redirect_url': '/accounts/success_view/'})
        else:
            # Return JSON response with form errors
            form_errors = form.errors.get_json_data() if form.errors else None
            print(form_errors)
            return JsonResponse({'status': 'error', 'errors': form_errors}, status=400)
        
def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        print(form.errors.as_json())  # Debug: Print form errors if any
        if form.is_valid():
            print("Form is valid")  # Debug: Check if form is valid
            email = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'message': 'Login successful!', 'redirect_url': '/dashboards/main_dashboard/'})
            else:
                return JsonResponse({'success': False, 'message': 'Invalid email or password. Please try again.'})
        else:
            print("Form is not valid")  # Debug: If form is not valid
            errors = form.errors
            return JsonResponse({'success': False, 'message': 'Form validation failed.', 'errors': errors})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method. Only POST requests are allowed.'})