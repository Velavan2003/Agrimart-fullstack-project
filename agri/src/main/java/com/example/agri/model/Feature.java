package com.example.agri.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Feature {
	@Id
	  private int fid;
	  private String toxicity;
	  private String yield;
	  private String uses;
	  Feature(){}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getToxicity() {
		return toxicity;
	}
	public void setToxicity(String toxicity) {
		this.toxicity = toxicity;
	}
	public String getYield() {
		return yield;
	}
	public void setYield(String yield) {
		this.yield = yield;
	}
	public String getUses() {
		return uses;
	}
	public void setUses(String uses) {
		this.uses = uses;
	}
	  

}
