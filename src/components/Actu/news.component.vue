<template>
  <div class="lastNews">
    <ul>
      <li>
        <div>
          <img
              src="https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
        </div>
        <div>
          <span class="category">Category</span>
          <span class="date">29 Jan, 2022</span>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra faucibus gravida ante lobortis. Sed
            facilisis odio eget tortor leo. </p>
        </div>
      </li>
      <li>
        <div>
          <img
              src="https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
        </div>
        <div>
          <span class="category">Category</span>
          <span class="date">29 Jan, 2022</span>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra faucibus gravida ante lobortis. Sed
            facilisis odio eget tortor leo. </p>
        </div>
      </li>
      <li>
        <div>
          <img
              src="https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
        </div>
        <div>
          <span class="category">Category</span>
          <span class="date">29 Jan, 2022</span>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra faucibus gravida ante lobortis. Sed
            facilisis odio eget tortor leo. </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newsComponent"
}
</script>

<style lang="less" scoped>
.lastNews {
  margin-left: 5rem;
  margin-right: 5rem;

  ul {
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 3rem;
    justify-content: center;

    li {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);

      div:nth-child(2) {
        padding: 2.5rem;
      }

      div {
        img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .category {
          background-color: #8D92FF;
          font-size: 1.8rem;
          color: #FFFFFF;
          padding: .5rem;
        }

        .date {
          margin-left: 2rem;
          font-size: 1.4rem;
          color: #9A9A9A;
        }

        h4 {
          font-size: 2.4rem;
          font-weight: 500;
          line-height: 50%;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>