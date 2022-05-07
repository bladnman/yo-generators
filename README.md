# yo-generators

This is a collection of generators and skeleton scaffolds that
I use in my environments.

# Yeoman

https://yeoman.io

```bash
npm install -g yo
```

# Each generator

Each generator is its own thing and needs to be `linked` to Yeoman before it can be used. 
General steps are:

1. Change into generator's folder
2. Run `npm link` which will install
3. Head over to any folder in your system to use the generator

## Using a generator

Each generator is a bit different, but generally you will run the command
```bash
yo <generator_name>
```

This will possibly ask you question and then explode files as needed.