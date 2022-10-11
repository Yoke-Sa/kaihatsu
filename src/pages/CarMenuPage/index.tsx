import React, { useContext } from "react";
import { PageStateContext } from "..";
import { BaseButton } from "../../component/atoms/button/BaseButton";
import { OnClickSetState } from "../../component/onClickSetState/onClickSetState";
const CarMenuPage = () => {

    const { page, setPage } = useContext(PageStateContext);
    return (
        <div className="car-menu">
            <header>
                <h1>Car Menu</h1>
            </header>

            <main>
                <BaseButton onClick={() => OnClickSetState(2, setPage)} _className="buttom">
                    新規ルート指定
                </BaseButton>
                <BaseButton onClick={() => OnClickSetState(3, setPage)} _className="buttom">
                    既存ルート選択
                </BaseButton>
                <BaseButton onClick={() => OnClickSetState(5, setPage)} _className="buttom">
                    車を見る
                </BaseButton>
                <BaseButton onClick={() => OnClickSetState(6, setPage)} _className="buttom">
                    終了
                </BaseButton>
            </main>

            <footer>
                <h1>&copy; Kohga. All rights Reserved.</h1>
            </footer>
        </div>
    )
}
export default CarMenuPage;