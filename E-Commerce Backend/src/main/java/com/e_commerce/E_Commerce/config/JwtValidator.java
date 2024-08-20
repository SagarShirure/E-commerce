package com.e_commerce.E_Commerce.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.spec.SecretKeySpec;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.crypto.SecretKey;

@Component
public class JwtValidator extends OncePerRequestFilter {


	@Override
	protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request,
			jakarta.servlet.http.HttpServletResponse response, jakarta.servlet.FilterChain filterChain)
			throws jakarta.servlet.ServletException, IOException {
		// TODO Auto-generated method stub
		String jwt = request.getHeader(JwtConstant.HEADER);

	    if (jwt != null) {
	        jwt = jwt.substring(7);

	        try {
	            SecretKey key = new SecretKeySpec(JwtConstant.SECRET_KEY.getBytes(), SignatureAlgorithm.HS256.getJcaName());
	            Claims claims = Jwts.parser()
	                    .setSigningKey(key)
	                    .parseClaimsJws(jwt)
	                    .getBody();

	            String email = String.valueOf(claims.get("email"));
	            String athorities= String.valueOf(claims.get("authorities"));
	            List<GrantedAuthority> auths= AuthorityUtils.commaSeparatedStringToAuthorityList(athorities);
	            Authentication authentication= new UsernamePasswordAuthenticationToken(email, null,auths);
	            
	            SecurityContextHolder.getContext().setAuthentication(authentication);
	        } catch (Exception e) {
	            // Log out the token validation error
	            logger.error("Token validation error: {}");
	        }
	    }

	    filterChain.doFilter(request, response);
	}
}
