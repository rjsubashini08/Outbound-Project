$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Campaigns.feature");
formatter.feature({
  "name": "Create the Campaigns",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search the Campaigns with WrapUp status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@results"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters userName and password",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to Home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user create the multichannel Campaigns",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the Campaigns details on plan tab with \"\u003ccontextVal\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the Campaigns details on build tab with \"\u003cStrategy\u003e\" and \"\u003cSegment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user can save the Campaigns",
  "keyword": "Then "
});
formatter.step({
  "name": "user can run the Campaigns",
  "keyword": "Then "
});
formatter.step({
  "name": "user can validate the result section",
  "keyword": "Then "
});
formatter.step({
  "name": "user can close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "contextVal",
        "Strategy",
        "Segment"
      ]
    },
    {
      "cells": [
        "Customer",
        "SV reg Auto strategy",
        "SAutosegment"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search the Campaigns with WrapUp status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@results"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters userName and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_enters_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_is_navigated_to_Home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[2]/div[1]/ul[1]/li[1]/a[1]/span[1]/span[1]\"}\n  (Session info: chrome\u003d96.0.4664.45)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC7-L-1346QQM\u0027, ip: \u0027192.168.102.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\RBFA18~1.RAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55988}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39ebec71b6fc9630341e9a7d983af43a\n*** Element info: {Using\u003dxpath, value\u003d//div[2]/div[1]/ul[1]/li[1]/a[1]/span[1]/span[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.LoginPage.validateHomepage(LoginPage.java:79)\r\n\tat StepDefinitions.LoginPageStep.user_is_navigated_to_Home_page(LoginPageStep.java:96)\r\n\tat ✽.user is navigated to Home page(src/test/resources/features/Campaigns.feature:108)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user create the multichannel Campaigns",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_create_the_multichannel_Campaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the Campaigns details on plan tab with \"Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_enter_the_Campaigns_details_on_plan_tab_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the Campaigns details on build tab with \"SV reg Auto strategy\" and \"SAutosegment\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_enter_the_Campaigns_details_on_build_tab_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can save the Campaigns",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_can_save_the_campaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can run the Campaigns",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_can_run_the_campaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can validate the result section",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_can_validate_the_result_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsPageStep.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});