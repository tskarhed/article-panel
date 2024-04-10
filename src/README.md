# Article panel

This is a datasource driven version of the default News panel in Grafana core. It works really well in combination with [RSS Data Source](https://github.com/VolkovLabs/volkovlabs-rss-datasource/), where you previously had to use the Dynamic Text panel, which didn't necessarily look similar to the default News panel.

- No writing HTML and CSS
- Aligns with the rest of Grafana's UI

## Combine multiple data sources

To use multiple sources in a single feed, do the follow:

1. Use the `-- Mixed --` data source
2. Add queries for all the datasources you want to combine
3. Go to the Transformations tab:

- Add the Merge transformation
- Add the Sort transformation and sort by time/date in reverse order

## Panel options

### Max content height

The maximum height of a single article. If the content is larger than this height, it will be truncated.

## Date

Used display the date.

## Title

Used display the title.

## Link

The URL that your title will link to.

## Image URL

The URL to where your image is stored.

## Description

The text that is being displayed.
