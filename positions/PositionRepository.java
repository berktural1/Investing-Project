package com.example.investingserver.positions;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PositionRepository extends CrudRepository<Position, Integer> {


}
