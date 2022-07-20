package com.gwangjubob.livealone.backend.dto.user;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMoreDTO {
    private String userId;
    private String area;
    private List<String> categorys;
}
