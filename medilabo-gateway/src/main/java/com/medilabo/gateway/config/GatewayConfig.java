package com.medilabo.gateway.config;

import com.medilabo.gateway.filter.AuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    private final AuthenticationFilter authenticationFilter;

    @Autowired
    public GatewayConfig(AuthenticationFilter authenticationFilter) {
        this.authenticationFilter = authenticationFilter;
    }

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("medilabo-patient", r -> r.path("/medilabo-patient/**")
                        .filters(f -> f.filter(authenticationFilter))
                        .uri("lb://medilabo-patient"))
                .route("medilabo-auth", r -> r.path("/medilabo-auth/**")
                        .uri("lb://medilabo-auth"))
                .build();
    }
}
