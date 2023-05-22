package com.fx.and_proejct;

import com.fx.and_proejct.filter.CORSFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;

@Configuration
public class WebConfig {

    @Bean
    public FilterRegistrationBean CORSFilter(){
        FilterRegistrationBean<Filter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new CORSFilter());
        filterRegistrationBean.setOrder(0);
        filterRegistrationBean.addUrlPatterns("/*");
        return filterRegistrationBean;
    }


}
