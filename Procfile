release: python manage.py migrate
web: gunicorn backend.wsgi --bind 0.0.0.0:8000 --log-file -