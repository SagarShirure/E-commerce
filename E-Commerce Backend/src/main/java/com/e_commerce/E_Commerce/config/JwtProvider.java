package com.e_commerce.E_Commerce.config;

import java.util.Date;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtProvider {

	SecretKey key = new SecretKeySpec(JwtConstant.SECRET_KEY.getBytes(), SignatureAlgorithm.HS256.getJcaName());
	public String generateToken(Authentication auth) {
		String jwt= Jwts.builder()
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+ 846000000))
				.claim("email", auth.getName())
				.signWith(SignatureAlgorithm.HS256,key).compact();
		return jwt;
	}
	
	public String getEmailFromToken(String jwt) {
		jwt=jwt.substring(7);
		 Claims claims =  Jwts.parser()
                 .setSigningKey(key)
                 .parseClaimsJws(jwt)
                 .getBody();
		 String email= String.valueOf(claims.get("email"));
		 return email;
	}
}
