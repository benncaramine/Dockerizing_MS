package net.youssfi.customerservice;

import net.youssfi.customerservice.config.GlobalConfig;
import net.youssfi.customerservice.entities.Customer;
import net.youssfi.customerservice.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties({GlobalConfig.class})
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
		return args -> {

				List<Customer> customerList = new ArrayList<>();

				for (int i = 1; i <= 5; i++) {
					customerList.add(
							Customer.builder()
									.firstName("Name " + i)
									.lastName("LName " + i)
									.email("name" + i + "@gmail.com")
									.build()
					);
				}
			customerRepository.saveAll(customerList);
		};
	}

}