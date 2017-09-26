## Attempt to create a meteor+angular4 project.

```
git clone https://github.com/duarte2025/angular4-meteor-base.git
cd angular4-meteor-base
meteor npm install
meteor run
```

### Steps

#### create project
```
meteor create <name>
cd <name>
```

#### packages removed
```
meteor remove blaze-html-templates insecure autopublish tracker mobile-experience
```

#### packages added
```
meteor add angular2-compilers dynamic-import
```

```
meteor npm install zone.js rxjs reflect-metadata es6-shim --save
```

```
meteor npm install angular2-meteor-polyfills @angular/{animations,common,compiler,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router} --save
```
