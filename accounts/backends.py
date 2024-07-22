from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
import logging

User = get_user_model()
logger = logging.getLogger(__name__)

class EmailBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        logger.debug("EmailBackend authenticate called with username: %s", username)
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                logger.debug("User authenticated successfully: %s", user)
                return user
            else:
                logger.debug("Password check failed for user: %s", user)
        except User.DoesNotExist:
            logger.debug("User does not exist with email: %s", username)
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None