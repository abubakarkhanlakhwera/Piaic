FROM python:3.12

# Install Poetry
RUN pip install poetry

# Set working directory
WORKDIR /code

# Set maintainer label
LABEL MAINTAINER="ABUAKAR"

# Copy project files
COPY ./helloworld/ /code/helloworld
COPY ./pyproject.toml /code/

# Install project dependencies
RUN poetry install

# Command to run the application
CMD ["poetry", "run", "uvicorn", "helloworld.main:app", "--reload"]

  