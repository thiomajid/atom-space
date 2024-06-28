---
title: "WeathyDotNet"
description: "A CLI tool that provides a given location’s weather using  OpenWeatherMap API"
pubDate: "Feb 06 2023"
repository: "https://github.com/thiomajid/WeathyDotNet"
heroImage: "https://www.notion.so/images/page-cover/met_fitz_henry_lane.jpg"
tags: [".NET", "Experiment"]
state: "Complete"
draft: false
---

![WeathyDotNet](https://www.notion.so/images/page-cover/met_fitz_henry_lane.jpg)

WeathyDotNet is a CLI tool built with **C#** that provides a given location's weather using _OpenWeather_'s API.

The tool can also be installed as a native command on your machine after a building it with the following instructions:

```bash
dotnet tool install --global --add-source ./nupkg WeathyDotNet
```

To see it in action, open your terminal and run the following command:

```bash
weathy <city_name>
```

_PS: you'll need an API key from [OpenWeather](https://openweathermap.org/) to use the tool._
