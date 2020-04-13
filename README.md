# sistemaTutorias
Name of the app is pending. Stay tunned for updates

------------------------------------------------------------------------------
## Getting Started
In order to run/use the app you must satisfy all the requirements.

### Back-End prerequisites
The Back-End requirements can be found on requiremnets.txt file. Before installing them, it's important that you already have a virtual environment running. Create one with the next command:
```
python -m virtualenv <your_virtualenv_name>
```
Then type the next command to install requirements:
```
pip install -r  requirements.txt
```

### Helpful commands
The following commands can be used to test services.
- Celery:
    ```
    celery -A tutoriapp worker -l info
    ```
