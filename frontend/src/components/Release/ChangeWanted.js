import React, { useState } from "react";
import agent from '../../agent.js';
import { Container } from "react-bootstrap";
import { Card, CardActions, CardContent, TextField, Typography, Button, InputLabel, MenuItem, Select, FormControl, Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";


const ChangeWanted = () => {
    const location = useLocation();

    const [name, setName] = useState(location.state.name);
    const [boolName, setBoolName] = useState(true);
    const [price, setPrice] = useState(location.state.price);
    const [boolPrice, setBoolPrice] = useState(true);
    const [sort, setSort] = useState(location.state.sort);
    const [count, setCount] = useState(location.state.count);
    const [boolCount, setBoolCount] = useState(true);
    const [remark, setRemark] = useState(location.state.remark);
    const [transaction, setTransaction] = useState(location.state.transaction);
    const [image, setImage] = useState(location.state.image);
    const [boolImage, setBoolImage] = useState(true);

    async function handleSubmit() {
        if (boolName && boolPrice && boolCount && boolImage) {
            agent.GoodWanted.changeGoodWanted(name, price, sort, count, remark, transaction, image, location.state.id);
        }
    }

    return (
        <Container style={{ marginTop: "20px", marginLeft: "15vw", marginRight: "15vw" }}>
            <Card style={{ display: 'flex', justifyContent: 'center' }}>
                <CardContent style={{ width: '30vw' }}>
                    <Grid container wrap="nowrap" spacing={3} direction="column">
                        <Grid item>
                            <Typography variant="h6">
                                发布求购信息
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                error={!boolName}
                                helperText={boolName ? "" : '商品名称不能为空'}
                                label="商品名称"
                                placeholder="请输入商品名称"
                                value={name}
                                variant="filled"
                                onChange={(event) => {
                                    var v = event.target.value;
                                    setName(v);
                                    if (v === '') {
                                        setBoolName(false);
                                    } else {
                                        setBoolName(true);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                error={!boolPrice}
                                helperText={boolPrice ? "" : '商品价格不能为0'}
                                label="价格"
                                placeholder="请输入商品价格"
                                value={price}
                                variant="filled"
                                onChange={(event) => {
                                    var v = event.target.value;
                                    setPrice(v);
                                    if (v == 0) {
                                        setBoolPrice(false);
                                    } else {
                                        setBoolPrice(true);
                                    }

                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                error={!boolCount}
                                helperText={boolCount ? "" : '商品数量不能为0'}
                                label="数量"
                                placeholder="请输入商品数量"
                                value={count}
                                variant="filled"
                                onChange={(event) => {
                                    var v = event.target.value;
                                    setCount(v);
                                    if (v == 0) {
                                        setBoolCount(false);
                                    } else {
                                        setBoolCount(true);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel>类别</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={sort}
                                    label="sort"
                                    variant="filled"
                                    onChange={(event) => { setSort(event.target.value) }}
                                >
                                    <MenuItem value={1}>电子产品</MenuItem>
                                    <MenuItem value={2}>书籍</MenuItem>
                                    <MenuItem value={3}>服饰</MenuItem>
                                    <MenuItem value={4}>票类</MenuItem>
                                    <MenuItem value={5}>食品</MenuItem>
                                    <MenuItem value={6}>日用品</MenuItem>
                                    <MenuItem value={7}>其他</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="详情"
                                placeholder="输入商品描述"
                                multiline
                                fullWidth
                                maxRows={4}
                                value={remark}
                                variant="filled"
                                onChange={(event) => { setRemark(event.target.value) }}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel>交易方式</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={transaction}
                                    variant="filled"
                                    label="transaction"
                                    onChange={(event) => { setTransaction(event.target.value) }}
                                >
                                    <MenuItem value={1}>邮寄</MenuItem>
                                    <MenuItem value={2}>自提</MenuItem>
                                    <MenuItem value={3}>当面交易</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                error={!boolImage}
                                helperText={boolImage ? "" : '商品图片不能为空'}
                                label="图片"
                                placeholder="请输入商品图片链接"
                                value={image}
                                variant="filled"
                                onChange={(event) => {
                                    var v = event.target.value;
                                    setImage(v);
                                    if (v == '') {
                                        setBoolImage(false);
                                    } else {
                                        setBoolImage(true);
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="contained" onClick={handleSubmit}>保存修改</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default ChangeWanted;