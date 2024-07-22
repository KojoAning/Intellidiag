# forms.py

from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate

class LoginForm(AuthenticationForm):
    username = forms.EmailField(
        max_length=254,
        label='Email',
        widget=forms.EmailInput(attrs={'placeholder': 'Email', 'class': 'form-control'})
    )
    password = forms.CharField(
        label='Password',
        widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'class': 'form-control'})
    )

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        self.fields['username'].label = "Email"
        
    def clean(self):
        email = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if email and password:
            self.user_cache = authenticate(self.request, username=email, password=password)
            if self.user_cache is None:
                raise forms.ValidationError('Invalid email or password. Please try again.')
            else:
                self.confirm_login_allowed(self.user_cache)

        return self.cleaned_data

    def get_user(self):
        return self.user_cache


class RegistrationForm(UserCreationForm):
    username = forms.CharField(
        required=True,
        label='',
        widget=forms.TextInput(attrs={'placeholder': 'Username'}),
        error_messages={'required': 'Please enter a username.'}
    )
    email = forms.EmailField(
        required=True,
        label='',
        widget=forms.EmailInput(attrs={'placeholder': 'Email'}),
        error_messages={'required': 'Please enter a valid email address.'}
    )
    password1 = forms.CharField(
        required=True,
        label='',
        widget=forms.PasswordInput(attrs={'placeholder': 'Password'}),
        error_messages={'required': 'Please enter a password.'}
    )
    password2 = forms.CharField(
        required=True,
        label='',
        widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password'}),
        error_messages={'required': 'Please confirm your password.'}
    )

    def clean(self):
        cleaned_data = super().clean()

        # Check if password1 and password2 match
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            self.add_error(None, "Passwords do not match. Please enter the same password in both fields.")

        return cleaned_data