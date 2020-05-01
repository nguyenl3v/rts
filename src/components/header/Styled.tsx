import styled from "styled-components";

export const StyledHeader: any = styled.div`
  .logo{
    margin-right:auto;
  }
  .header-user{
    margin-left:auto;
    display: flex;
    .login, .register{
      width:80px;
      a{
        color: #222222;
      }
    }
  }
  .header{
    display: flex;
    height: 80px;
    align-items: center;
  }
`;