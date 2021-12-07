package Runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/resources/features/",
glue={"StepDefinitions"},
plugin = {
"pretty",	"json:target/cucumber-json-report.json","html:target/cucumber-html-report",
//	"pretty", "json:target/report.json", "cucumber-reporting:target/pretty-cucumber"	
//	"pretty", "json:target/report.json", "de.monochromata.cucumber.report.PrettyReports:target/pretty-cucumber",
},
//plugin = {"prettyp-", "html:test-output", "json:target/cucumber-json-report.json", "junit:junit_xml/cucumber.xml"},
monochrome = true,//displays the console output in a readable format
tags={"@results"},
dryRun = false
)
public class TestRunner {
}