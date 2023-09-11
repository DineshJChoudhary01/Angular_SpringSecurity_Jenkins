import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class SSAngularCalcTesting {
    public static void main(String[] args) throws InterruptedException {

//        System.setProperty("webdriver.chrome.driver", "F://Unoveo//backend//Testing//chromedriver.exe");
        System.setProperty("webdriver.chrome.driver", "C://Projects//webapps//Jenkins//chromedriver.exe");

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:4200/login");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        WebElement usernameField = driver.findElement(By.name("username"));
        WebElement passwordField = driver.findElement(By.name("password"));
        WebElement loginButton = driver.findElement(By.id("login-button"));

        usernameField.sendKeys("admin");
        passwordField.sendKeys("admin");
        loginButton.click();

        Thread.sleep(5000);

        driver.findElement(By.xpath("//button[text()='8']")).click();
        driver.findElement(By.xpath("//button[text()='+']")).click();
        driver.findElement(By.xpath("//button[text()='3']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='=']")).click();

        Thread.sleep(2000);

        WebElement logoutButton = driver.findElement(By.id("logout-button"));
        logoutButton.click();
        Thread.sleep(2000);

        driver.quit();
    }
}
