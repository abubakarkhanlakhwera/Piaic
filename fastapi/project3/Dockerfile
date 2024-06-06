FROM python:3.12
WORKDIR /qwerty
COPY . .
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install
EXPOSE 8000
CMD [ "poetry","run","uvicorn","project3.main:app","--reload" ]